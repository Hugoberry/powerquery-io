---
title: Csv.Document
---

# Csv.Document


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


## Remarks

CSV құжатының мазмұнын кесте түрінде қайтарады.

-   `columns` нөл, бағандар саны, баған атауларының тізімі, кесте түрі немесе параметрлер жазбасы болуы мүмкін.
-   `delimiter` бір таңбалы таңба, таңбалар тізімі немесе мән `""` болуы мүмкін, бұл жолдарды қатар бос орын таңбаларымен бөлу керек. Әдепкі: `","`.
-   `extraValues` қолдау көрсетілетін мәндері үшін `ExtraValues.Type` қараңыз.
-   `encoding` мәтін шифрлау түрін көрсетеді.

Егер `columns` (және `delimiter`, `extraValues` және `encoding` null болса) үшін жазба көрсетілсе, онда мынадай жазба өрістері берілуі мүмкін:

-   `Бөлгіш`: бір таңбалы баған бөлгіші. Әдепкі: `","`.
-   `Бағандар`: null, бағандар саны, баған атауларының тізімі не кесте түрі болуы мүмкін. Егер бағандар саны енгізілген саннан кішірек болса, қосымша бағандар еленбей қалады. Егер бағандар саны енгізілген саннан үлкенірек болса, қосымша бағандар null болады. Көрсетілмеген кезде, бағандар саны енгізілгеннен мән арқылы анықталады.
-   `Кодтау`: Файлдың мәтіндік кодталуы. Әдепкі: 65001 (UTF-8).
-   `CsvStyle`: Тырнақшалардың қалай өңделетенін нақтылайды.
    -   `CsvStyle.QuoteAfterDelimiter` (әдепкі):Өрістегі тырнақшалар тек бөлгіштен кейін келгенде ғана мәнге ие болады.
    -   `CsvStyle.QuoteAlways`:Өрістегі тырнақшалар қай жерде шықса да, әрқашан маңызды болады.
-   `QuoteStyle`: Тырнақшаға алынған жол үзілімдері қалай өңделіп жатқанын көрсетеді.
    -   `QuoteStyle.Csv` (әдепкі): Дәйектелген жол үзілімдері ағымдағы жолдың соңы ретінде емес, деректердің бір бөлігі ретінде қарастырылады.
    -   `QuoteStyle.None`: Барлық жол үзілімдері дәйектелген мән ішінде пайда болса да, ағымдағы жолдың соңы ретінде қарастырылады.
-   `IncludeByteOrderMark`: CSV шығысының басына байт реті белгісін (BOM) қосу керектігін көрсететін логикалық мән. Егер true мәні болса, BOM жазылады (мысалы, UTF-8 BOM: `0xEF 0xBB 0xBF`); Егер false мәніне орнатылса, BOM белгісі қосылмайды. Бұл опция тек шығыс сценарийлерінде ғана қолданылады. Әдепкі мән: `false`.
-   `ExtraValues`: ExtraValues қолдау көрсетілетін мәндері үшін `ExtraValues.Type` қараңыз.


## Examples

### Example #1
Баған тақырыптары бар CSV мәтінін өңдеңіз.
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


### Example #2
Process CSV text with multiple delimiter characters. In this example, the third parameter specifies the delimiter pattern `#|#` to use instead of the default.
```powerquery
let
    csv = Text.Combine({"OrderID#|#Color", "1#|#Red", "2#|#Blue"}, "#(cr)#(lf)")
in
    Table.PromoteHeaders(Csv.Document(csv, null, "#|#"))
```

Result: 
```powerquery
Table.FromRecords({
    [OrderID = "1", Color = "Red"],
    [OrderID = "2", Color = "Blue"]
})
```




## Category
Accessing data
