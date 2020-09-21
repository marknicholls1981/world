$("#Submit").click(function () {
  $.ajax({
    url: "php/getCountryInfo.php",
    type: "POST",
    dataType: "json",
    data: {
      country: $("#country").val(),
      lang: $("#language").val(),
    },
    success: function (result) {
      console.log(result);

      if (result.status.name == "ok") {
        $("#txtContinent").html(result["data"][0]["continent"]);
        $("#txtCapital").html(result["data"][0]["capital"]);
        $("#txtLanguages").html(result["data"][0]["languages"]);
        $("#txtPopulation").html(result["data"][0]["population"]);
        $("#txtArea").html(result["data"][0]["areaInSqKm"]);
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
