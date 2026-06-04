---
title: Time.ToText
---

# Time.ToText


Vráti textové vyjadrenie hodnoty času.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vráti textové vyjadrenie `time`. Na špecifikovanie ďalších vlastností je možné uviesť voliteľný parameter `record`, `options`. `culture` sa používa iba v starších pracovných postupoch. `Record` môže obsahovať nasledujúce polia:

-   `Format`: Hodnota `text` označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty `null` bude mať za následok formátovanie dátumu pomocou predvoleného nastavenia definovaného hodnotou `Culture`.
-   `Culture`: Ak `Format` nemá hodnotu null, `Culture` ovláda niektoré špecifikátory formátu. Napríklad v `"en-US"` `"tt"` je `"AM" alebo "PM"`, zatiaľ čo v `"ar-EG"` `"tt"` je `"ص" alebo "م"`. Keď `Formát` `null`, `Culture` ovláda predvolený formát, ktorý sa má použiť. Keď má `Culture` hodnotu `null` alebo sa vynechá, použije sa `Culture.Current`.

Na podporu starších pracovných postupov môžu byť textové hodnoty aj `options` a `culture`. Toto sa správa rovnako, ako keby `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Konvertujte hodnotu `#time(01, 30, 25)` na hodnotu `text`. *Výsledok sa môže líšiť v závislosti od aktuálnej jazykovej verzie.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Konvertujte pomocou štandardného formátu času.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
