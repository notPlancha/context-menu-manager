//Pre loading
$(document).ready(
  function() {
    $('button[name="Refresh"]').click(
      function() {
        location.reload();
      }
    )
  }
);

$(document).ready(
  function() {
    $('button[name="Save"]').click(
      function() {
        location.reload();
      }
    )
  }
);

$(document).ready(
  function() {
    $('button[name="Load"]').click(
      function() {
        location.reload();
      }
    )
  }
);

$(document).ready(
  function() {
    $('button[name="Merge"]').click(
      function() {
        location.reload();
      }
    )
  }
);

//loading
$(document).ready(
  function() {
    $(".context-menu-buttons")
      .append('<a><div class="list"></div></a>');
    $(".context-menu-buttons")
      .append('<a><div class="new list">+</div></a>');
  }
);


//post-loading
$(document).ready(
  function() {
    $('div.new').click(
      function() {
        $('<a><div class="list">Untitled</div></a>').insertBefore(".new")
      }
    )
  }
);
