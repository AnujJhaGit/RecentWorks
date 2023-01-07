$(function() {
    $(".text").bind("change keyup input", function(e) {
      var writtenText = $(".text").val();
      $(".button").text(writtenText);
  
      return false;
    });
  
    $(".font").on("change", function(e) {
      var selected = $(".font option:selected").val();
      $(".button").css("font-family", selected);
  
      $(".codes .line1").text("font-family:" + selected + ";");
      return false;
    });
  
    $("#font-size").slider({
      range: "min",
      value: 18,
      min: 0,
      max: 40,
      slide: update
    });
  
    function update(event, slider) {
      $("#font-size-amount").text(slider.value + "px");
      $(".button").css("font-size", slider.value + "px");
  
      $(".codes .line2").text("font-size:" + slider.value + "px" + ";");
    }
  
    $("#border-radius").slider({
      range: "min",
      value: 4,
      min: 0,
      max: 40,
      slide: radius
    });
  
    function radius(event, slider) {
      $("#border-radius-amount").text(slider.value + "px");
      $(".button").css("border-radius", slider.value + "px");
  
      $(".codes .line3").text("border-radius:" + slider.value + "px" + ";");
    }
  
    $(".padding").bind("change keyup input", function() {
      var paddingLeft = $("#padding-left").val();
      var paddingRight = $("#padding-right").val();
      var paddingTop = $("#padding-top").val();
      var paddingBottom = $("#padding-bottom").val();
  
      $(".button").css("padding-left", parseInt(paddingLeft, 10));
      $(".button").css("padding-right", parseInt(paddingRight, 10));
      $(".button").css("padding-top", parseInt(paddingTop, 10));
      $(".button").css("padding-bottom", parseInt(paddingBottom, 10));
  
      $(".codes .line4").text("padding-left:" + paddingLeft + "px" + ";");
      $(".codes .line5").text("padding-right:" + paddingRight + "px" + ";");
      $(".codes .line6").text("padding-top:" + paddingTop + "px" + ";");
      $(".codes .line7").text("padding-bottom:" + paddingBottom + "px" + ";");
    });
  
    $(".color").minicolors({
      defaultValue: "#ffffff"
    });
    $(".color").on("change", function() {
      var color = $(".color").val();
      $(".button").css("color", color);
  
      $(".codes .line8").text("color:" + color + ";");
    });
  
    $(".background-color").minicolors({
      defaultValue: "#cc6666"
    });
    $(".background-color").on("change", function() {
      var backgroundColor = $(".background-color").val();
      $(".button").css("background-color", backgroundColor);
  
      $(".codes .line9").text("background-color:" + backgroundColor + ";");
    });
  
    $(".color-hover").on("change", function() {
      var hoverColor = $(".color-hover").val();
      var color = $(".color").val();
  
      $(".button").hover(function() {
        $(".button").css("color", hoverColor);
      });
      $(".button").mouseout(function() {
        $(".button").css("color", color);
      });
  
      $(".codes .line10").text("color:" + hoverColor + ";");
    });
  
    $(".background-color-hover").minicolors({
      defaultValue: "#8e4747"
    });
    $(".color-hover").minicolors({
      defaultValue: "#ffffff"
    });
    $(".background-color-hover").on("change", function() {
      var hoverBackground = $(".background-color-hover").val();
      var backgroundColor = $(".background-color").val();
  
      $(".button").hover(function() {
        $(".button").css("background-color", hoverBackground);
      });
      $(".button").mouseout(function() {
        $(".button").css("background-color", backgroundColor);
      });
  
      $(".codes .line11").text("background-color:" + hoverBackground + ";");
    });
  
    $(".button").hover(function() {
      var hoverColor = $(".color-hover").val();
      var color = $(".color").val();
      var hoverBackground = $(".background-color-hover").val();
      var backgroundColor = $(".background-color").val();
  
      $(".button").css("color", hoverColor);
      $(".button").css("background-color", hoverBackground);
    });
    $(".button").mouseout(function() {
      var hoverColor = $(".color-hover").val();
      var color = $(".color").val();
      var hoverBackground = $(".background-color-hover").val();
      var backgroundColor = $(".background-color").val();
  
      $(".button").css("background-color", backgroundColor);
      $(".button").css("color", color);
    });
  
    var clipboard = new Clipboard(".clipboard");
    $(".copied-to-clipboard").css("opacity", 0);
  
    $(".clipboard").click(function() {
      $(this).html("Copied!");
      $(".copied-to-clipboard").css("opacity", 1);
  
      setTimeout(function() {
        $(".clipboard").html("Copy codes");
        $(".clipboard").prop("disabled", false);
        $(".copied-to-clipboard").css("opacity", 0);
      }, 1750);
    });
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 150) {
        $(".button-preview").css("top", 400);
      } else {
        $(".button-preview").css("top", 0);
      }
    });
  
    Numscrubber.init();
  });
  