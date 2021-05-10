const $ = jQuery = require('jquery');
const regedit = require('regedit');
//https://www.npmjs.com/package/regedit#a-note-about-electron

//functions



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

      regedit.list(
        ['HKLM\\\SOFTWARE\\Classes\\*\\shell'],//TODO check if it's working
        function(err, result) {
          console.log("result from regedit");
          console.log(result);
        }
      )
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
