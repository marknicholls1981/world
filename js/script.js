$("#Submit").click(function () {
  $.ajax({
    url: "php/getTownInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      town: $("#selectTown").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#town").html(result["data"][0]["name"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error");
      // your error code
    },
  });
});

$("#submitWeather").click(function () {
  $.ajax({
    url: "php/getWeatherInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      weatherStation: $("#selectCity").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#temp").html(result["data"]["temperature"]);
        $("#wind").html(result["data"]["windDirection"]);
        $("#clouds").html(result["data"]["clouds"]);
      }
    },
    error: function (jqXHR, textStatus, errorThrown) {
      console.log("Error");
      // your error code
    },
  });
});

$(window).on("load", function () {
  if ($("#preloader").length) {
    $("#preloader")
      .delay(100)
      .fadeOut("slow", function () {
        $(this).remove();
      });
  }
});
