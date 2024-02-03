---
title: Csv.Document
---

# Csv.Document


## Description

CSV құжатының мазмұнын кесте ретінде қайтарады.


## Syntax

```powerquery
Csv.Document(
    source as any,
    optional columns as any,
    optional delimiter as any,
    optional extraValues as number,
    optional encoding as TextEncoding.Type
) as table
```


## Details

CSV құжатының мазмұндарын кесте түрінде қайтарады.    <ul>      <li>        <code>columns</code> келесі мәндерге ие бола алады: null мәні, бағандар саны, баған атауларының тізімі, кесте түрі немесе параметрлер жазбасы.      </li>      <li>        <code>delimiter</code> бір таңба, таңбалар тізімі немесе бірізді бос орын таңбаларымен бөлінуі тиіс жолдар санын көрсететін <code>""</code> мәні болуы мүмкін. Әдепкі: <code>","</code>.      </li>      <li>        <code>extraValues</code> қолдау көрсетілетін мәндерді <code>ExtraValues.Type</code> қараңыз.      </li>      <li>        <code>encoding</code> мәтінді кодтау түрін анықтайды.      </li>    </ul>    Егер <code>columns</code> арналған жазба көрсетілсе (ал <code>delimiter</code>, <code>extraValues</code> және <code>encoding</code> мәндері null болса), келесі жазба өрістерін көрсетуге болады:    <ul>      <li>        <code>Delimiter</code>: бағандарды бөлгіш. Әдепкі: <code>","</code>.      </li>      <li>        <code>Columns</code>. Келесі мәндерге ие бола алады: null мәні, бағандар саны, баған атауларының тізімі немесе кесте түрі. Егер бағандар саны кіріс деректерінде табылған саннан кіші болса, қосымша бағандардар ескерілмейді. Егер бағандар саны кіріс деректерінде табылған саннан үлкен болса, қосымша бағандар мәні null болады. Егер мән көрсетілмесе, бағандар саны кіріс деректеріне негізделіп анықталады.      </li>      <li>        <code>Encoding</code>: Файл мәтінін кодтау. Әдепкі: 65001 (UTF-8).      </li>      <li>        <code>CsvStyle</code>: Тырнақшалардың қолданылуын анықтайды.        <ul>          <li>            <code>CsvStyle.QuoteAfterDelimiter</code> (әдепкі): Өрістегі тырнақшалар тікелей бөлгіштен кейін ғана есепке алынады.          </li>          <li>            <code>CsvStyle.QuoteAlways</code>: Өрістегі тырнақшалар орналасқан жеріне қарамастан әрқашан есепке алынады.          </li>        </ul>      </li>      <li>        <code>QuoteStyle</code>: Тырнақшалы жол үзілімдерінің қолданылуын анықтайды.        <ul>          <li>            <code>QuoteStyle.Csv</code> (әдепкі): Тырнақшалы жол үзілімдері, ағымдағы жолдың соңы емес, деректердің бөлігі ретінде есептеледі.          </li>          <li>            <code>QuoteStyle.None</code>: Барлық жол үзілімдері ағымдағы жолдың соңы ретінде есептеледі, тіпті тырнақшалы мән ішінде болсада.          </li>        </ul>      </li>    </ul>  


## Examples

### Example #1 
Баған тақырыптары бар CSV мәтінін өңдеу
```powerquery
let
    csv = Text.Combine({"OrderID,Item", "1,Fishing rod", "2,1 lb. worms"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Item = "Fishing rod"],
    [OrderID = "2", Item = "1 lb. worms"]
})
```




## Category
Accessing data
