const $ = jQuery = require('jquery');
const Registry = require('winreg');
const regedit = require('regedit');
//https://www.npmjs.com/package/regedit#a-note-about-electron


//functions

function getFromKey(hive, pathWithoutHive){
  let regs = new Registry(
    {
    hive:hive,
    key:pathWithoutHive
    }
  )
  regs.values(
    function(err, itens){
      if(err) {
        console.log('Error on getting values:' + err);
        return null;
      }
      else{
        return itens;
      }
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
    var regs = [];
    regedit.list(['HKCU\\SOFTWARE', 'HKLM\\SOFTWARE'])
    .on('data', function(entry) {
    console.log(entry.key)
    console.log(entry.data)
})
    $(".context-menu-buttons")
      .append('<a><div class="list"></div></a>');
    $(".context-menu-buttons")
      .append('<a><div class="new list">+</div></a>');



    let reg = getFromKey(Registry.HKLM, '\\SOFTWARE\\Classes\\*\\shell');
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
