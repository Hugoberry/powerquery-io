---
title: Binary.View
---

# Binary.View


Izveido vai izvērš bināru ar lietotāja definētiem apdarinātājiem vaicājumu un darbību operācijām.


## Syntax

```powerquery
Binary.View(
    binary as binary,
    handlers as record
) as binary
```


## Remarks

Atgriež `binary` skatu, kur `handlers` norādītās funkcijas tiek izmantotas operācijas noklusējuma darbības vietā, kad operācija tiek lietota skatam.

Ja `binary` ir norādīta, visas apdarinātāja funkcijas nav obligātas. Ja `binary` nav norādīta, `GetStream` apdarinātāja funkcijas ir obligātas. Ja apdarinātāja funkcija operācijai nav norādīta, tās vietā vienumam `binary` tiek lietota operācijas noklusējuma darbība (izņemot `GetExpression` gadījumu).

Apdarinātāja funkcijām jāatgriež vērtība, kas ir semantiski ekvivalenta rezultātam, kas tiek iegūts, lietojot operāciju vienumam `binary` (vai `GetExpression` gadījumā rezultāta skatam).

Ja apdarinātāja funkcija izraisa kļūdu, skatam tiek lietota operācijas noklusējuma darbība.

`Binary.View` var izmantot, lai ieviestu datu avota locīšanu — M vaicājumu tulkojumu avotam atbilstošās operācijās (piemēram, lai lejupielādētu faila sadaļu).

Pilnīgāku `Binary.View` aprakstu skatiet publicētajā Power Query pielāgotā savienotāja dokumentācijā.


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
