class GasPrice {
    getData() {
        $.ajax({
            dataType: "json",
            url: 'https://api.tradingeconomics.com/markets/historical/ng1:com?c=guest:guest&f=JSON',
            method: 'GET',
        }).done(function(datos){
  //              var resultados = JSON.parse(datos);
                $("table").remove();
                $("body").append("<table>   <tr><th>Fecha</th>         <th>Valor Apertura</th>           <th>Valor mas alto</th>  <th>Valor mas bajo</th> <th>Valor Cierre</th></tr></table>");
                $.each(datos, function (i, item) {
                    $("table").append("<tr>     <td>" + item.Date + "</td>  <td>" + item.Open + " USD/MMBtu</td> <td>" + item.High + " USD/MMBtu</td>      <td>" + item.Low + " USD/MMBtu</td> <td>" + item.Close + " USD/MMBtu</td></tr>");
                });
            });
    }
}
 
var datos = new GasPrice();