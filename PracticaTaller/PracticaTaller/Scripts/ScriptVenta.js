$(document).ready(function () {
    $("tr.registro-venta").click(function () {
        var id = $(this).find("td.id-venta").html();
        $("tr.registro-detalle").hide();
        $("tr.registro-detalle").has("td.id-venta:contains('" + id + "')").show();
    });
    $("#txt-buscar").on('input', function () {

        var nombreBuscado = $("#txt-buscar").val().toUpperCase();

        $(".producto").each(function (index, data) {

            var nombreProducto = ($(this).find("td.nombre").html().toUpperCase());

            if (nombreProducto.startsWith(nombreBuscado)) {
                $(this).show();

            }
            else {

                $(this).hide();
            }
        });
        var cantidadVisibles = $(".producto:visible").length;
        console.log(cantidadVisibles);
        if (cantidadVisibles == 1) {
            $('#boton').attr("disabled", false);
        }
        else {
            $('#boton').attr("disabled", true);
        }

    });
});