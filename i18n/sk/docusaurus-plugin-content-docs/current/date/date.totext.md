---
title: Date.ToText
---

# Date.ToText


Vráti textové vyjadrenie hodnoty dátumu.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vráti textové vyjadrenie `date`. Na špecifikovanie ďalších vlastností je možné uviesť voliteľný parameter `record`, `options`. `culture` sa používa iba v starších pracovných postupoch. `Record` môže obsahovať nasledujúce polia:

-   `Format`: Hodnota `text` označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty `null` bude mať za následok formátovanie dátumu pomocou predvoleného nastavenia definovaného hodnotou `Culture`.
-   `Culture`: Ak `Format` nemá hodnotu null, `Culture` ovláda niektoré špecifikátory formátu. Napríklad v `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...` , zatiaľ čo v `"ru-RU"` `"MMM"` je `"$", "ааа", "аар", ...` . Keď `Formát` `null`, `Culture` ovláda predvolený formát, ktorý sa má použiť. Keď má `Culture` hodnotu `null` alebo sa vynechá, použije sa `Culture.Current`.

Na podporu starších pracovných postupov môžu byť textové hodnoty aj `options` a `culture`. Toto sa správa rovnako, ako keby `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertujte hodnotu `#date(2010, 12, 31)` na hodnotu `text`. *Výsledok sa môže líšiť v závislosti od aktuálnej jazykovej verzie.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Vyhľadajte rok v kalendári Hedžra, ktorý zodpovedá 1. januáru 2000 v gregoriánskom kalendári.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
