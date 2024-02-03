---
title: Table.Group
---

# Table.Group


## Description

Кестедегі кілті бірдей жолдарды топтайды.


## Syntax

```powerquery
Table.Group(
    table as table,
    key as any,
    aggregatedColumns as list,
    optional groupKind as GroupKind.Type,
    optional comparer as function
) as table
```


## Details

<code>table</code> жолдарын <code>key</code> анықтаған кілт бағандары бойынша топтастырады. <code>key</code> жалғыз баған атауы немесе баған атауларының тізімі болуы мүмкін.    Әр топ үшін кілт бағандарын (және олардың мәндерін), сондай-ақ <code>aggregatedColumns</code> анықтаған кез-келген біріктірілген бағандардан тұратын жазба жасалады.    Сонымен, <code>groupKind</code> және <code>comparer</code> де көрсетілуі мүмкін.<br />    <br />    Егер деректер кілт бағандары бойынша сұрыпталған болса, онда GroupKind.Local а <code>groupKind</code> ұсынылуы мүмкін. Бұл белгілі бір жағдайларда топтаудың жұмысын жақсартуы мүмкін,    өйткені негізгі мәндер жиынтығы берілген барлық қатарлар сабақтас деп есептеледі..<br />    <br />    <code>comparer</code> жіберген кезде, егер ол әр түрлі кілттерді тең деп санаса, онда оның кілттері өзгелерден өзгеше болатын топқа қатар қойылуы мүмкін екенін ескеріңіз.<br />    <br />    Бұл функция қайтарылатын жолдардың ретіне кепілдік бермейді.  


## Examples

### Example #1 
Бағалар қосындысы (&#34;each List.Sum([price])&#34;) бар [total] жиынтық бағанын қосу арқылы кестені топтау.
```powerquery
Table.Group(
    Table.FromRecords({
        [CustomerID = 1, price = 20],
        [CustomerID = 2, price = 10],
        [CustomerID = 2, price = 20],
        [CustomerID = 1, price = 10],
        [CustomerID = 3, price = 20],
        [CustomerID = 3, price = 5]
    }),
    "CustomerID",
    {"total", each List.Sum([price])}
)
```

Result: 
```powerquery
Table.FromRecords(
    {
        [CustomerID = 1, total = 30],
        [CustomerID = 2, total = 30],
        [CustomerID = 3, total = 25]
    },
    {"CustomerID", "total"}
)
```




## Category
Table.Transformation
