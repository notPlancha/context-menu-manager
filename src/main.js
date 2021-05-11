const $ = jQuery = require('jquery');
const regedit = require('regedit');

var regs = {
  values : [],
  push: function(item){
    this.values.push(item);
    $(".context-menu-buttons")
      .append(`<a><div class="list">${item.title}</div></a>`);
  },
  remove: function(item){
    for (var i = 0; i < this.values.length; i++) {
      if(this.values[i].title == item) {
        return this.values.splice();
      }
    }
    return null;
  }
}
//https://www.npmjs.com/package/regedit#a-note-about-electron


//functions

function getFromKey(path, addToRegs=true){ // Can't figure out how to return the result, so everything has to be done here

  regedit.list(
    path,
    function(err, result){
      var item= {};
      for (var i = 0; i < result[path].keys.length; i++) {
        key = result[path].keys[i];
        item.title = key;
        regedit.list(
          path + "\\" + key,
          function(err, returned){
            //TODO check what to put here
          }
        )
      }

      regs.push(item);
    }
  )
}

//Pre loading
$(document).ready(
  function() {
    $('button[name="Refresh"]').on('click',
      function() {
        location.reload();
      }
    )
  }
);

$(document).ready(
  function() {
    $('button[name="Save"]').on('click',
      function() {
        // TODO:
      }
    )
  }
);

$(document).ready(
  function() {
    $('button[name="Load"]').on('click',
      function() {

      }
    )
  }
);

$(document).ready(
  function() {
    $('button[name="Merge"]').on('click',
      function() {
        // TODO:
      }
    )
  }
);

//loading
$(document).ready(
  function() {
    // TODO: get the things
    $(".context-menu-buttons")
      .append('<a><div class="list"></div></a>');
    $(".context-menu-buttons")
      .append('<a><div class="new list">+</div></a>');



    regs.push(getFromKey('HKLM\\SOFTWARE\\Classes\\*\\shell'));
    regs.push(getFromKey('HKLM\\SOFTWARE\\Classes\\*\\shell\\Atom KI ext'));
    console.log("regs:");
    console.log(regs);
  }
);

$(document).ready(
  function(){
    $('div.list').on('click',
      function(){
        // TODO:
      }
    )
  }
)

//post-loading
$(document).ready(
  function() {
    $('div.new')
      .off('click')
      .on('click',
        function() {
          $('<a><div class="list">Untitled</div></a>').insertBefore(".new")
        }
    )
  }
);
