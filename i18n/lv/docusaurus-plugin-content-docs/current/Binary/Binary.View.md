---
title: Binary.View
---

# Binary.View


## Description

Izveido vai izvērš bināru ar lietotāja definētiem apdarinātājiem vaicājumu un darbību operācijām.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Details

Atgriež <code>binary</code> skatu, kur <code>handlers</code> norādītās funkcijas tiek izmantotas operācijas noklusējuma darbības vietā, kad operācija tiek lietota skatam.<br />Ja <code>binary</code> ir norādīta, visas apdarinātāja funkcijas nav obligātas. Ja <code>binary</code> nav norādīta, <code>GetStream</code> apdarinātāja funkcijas ir obligātas. Ja apdarinātāja funkcija operācijai nav norādīta, tās vietā vienumam <code>binary</code> tiek lietota operācijas noklusējuma darbība (izņemot <code>GetExpression</code> gadījumu).<br />Apdarinātāja funkcijām jāatgriež vērtība, kas ir semantiski ekvivalenta rezultātam, kas tiek iegūts, lietojot operāciju vienumam <code>binary</code> (vai <code>GetExpression</code> gadījumā rezultāta skatam).<br />Ja apdarinātāja funkcija izraisa kļūdu, skatam tiek lietota operācijas noklusējuma darbība.<br /><code>Binary.View</code> var izmantot, lai ieviestu datu avota locīšanu — M vaicājumu tulkojumu avotam atbilstošās operācijās (piemēram, lai lejupielādētu faila sadaļu).<br />Pilnīgāku <code>Binary.View</code> aprakstu skatiet publicētajā Power Query pielāgotā savienotāja dokumentācijā.<br />


## Examples

### Example #1 
Izveidojiet pamata skatu, kuram nav nepieciešama piekļuve datiem, lai noteiktu garumu.
```powerquery
Binary.View(
    null,
    [
        GetLength = () => 12,
        GetStream = () => Text.ToBinary("hello world!")
    ]
)
```

Result: 
```powerquery
Text.ToBinary("hello world!")
```




## Category
Binary
