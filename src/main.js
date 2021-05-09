const $ = jQuery = require('jquery');

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
        $.get('./files/debug.txt', function(data){
          console.log(data);
        })
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
