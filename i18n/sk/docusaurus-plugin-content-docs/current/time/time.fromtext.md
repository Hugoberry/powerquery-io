---
title: Time.FromText
---

# Time.FromText


Vytvorí čas z lokálnych a univerzálnych a vlastných formátov času.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Vytvorí z textového vyjadrenia `text` hodnotu `time`. K zadaniu ďalších vlastností možno zadať voliteľný parameter `record` `options`. `Record` môže obsahovať nasledujúce polia:

-   `Format`: Hodnota `text` označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na adrese https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo poskytnutie hodnoty `null` bude mať za následok formátovanie času s použitím maximálneho úsilia.
-   `Culture`: Ak `Format` nemá hodnotu null, `Culture` ovláda niektoré špecifikátory formátu. Napríklad v `"en-US"` `"tt"` je `"AM" alebo "PM"`, zatiaľ čo v `"ar-EG"` `"tt"` je `"ص" alebo "م"`. Keď `Formát` `null`, `Culture` ovláda predvolený formát, ktorý sa má použiť. Keď má `Culture` hodnotu `null` alebo sa vynechá, použije sa `Culture.Current`.

Na podporu starších pracovných postupov môže byť textová hodnota `options`. Toto sa správa rovnako, ako keby `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertujte hodnotu `"10:12:31am"` na hodnotu času.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Konvertujte hodnotu `"1012"` na hodnotu času.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Konvertujte hodnotu `"10"` na hodnotu času.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
