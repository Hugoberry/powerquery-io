---
title: DateTime.ToText
---

# DateTime.ToText


Vráti textové vyjadrenie hodnoty dátumu a času.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vráti textové vyjadrenie `dateTime`. Na špecifikovanie ďalších vlastností je možné uviesť voliteľný parameter `record`, `options`. `culture` sa používa iba v starších pracovných postupoch. `Record` môže obsahovať nasledujúce polia:

-   `Format`: Hodnota `text` označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty `null` bude mať za následok formátovanie dátumu pomocou predvoleného nastavenia definovaného hodnotou `Culture`.
-   `Culture`: Ak `Format` nemá hodnotu null, `Culture` ovláda niektoré špecifikátory formátu. Napríklad v `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...` , zatiaľ čo v `"ru-RU"` `"MMM"` je `"$", "ааа", "аар", ...` . Keď `Formát` `null`, `Culture` ovláda predvolený formát, ktorý sa má použiť. Keď má `Culture` hodnotu `null` alebo sa vynechá, použije sa `Culture.Current`.

Na podporu starších pracovných postupov môžu byť textové hodnoty aj `options` a `culture`. Toto sa správa rovnako, ako keby `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertujte hodnotu `#datetime(2010, 12, 31, 01, 30, 25)` na `text` hodnotu. *Výsledok sa môže líšiť v závislosti od aktuálnej jazykovej verzie.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Konvertujte pomocou vzoru ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
