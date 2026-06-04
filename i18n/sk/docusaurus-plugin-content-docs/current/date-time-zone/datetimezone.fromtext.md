---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Vytvorí hodnotu datetimezone z lokálnych, univerzálnych a vlastných formátov datetimezone.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Vytvorí z textového vyjadrenia `text` hodnotu `datetimezone`. K zadaniu ďalších vlastností možno zadať voliteľný parameter `record` `options`. `Record` môže obsahovať nasledujúce polia:

-   `Format`: Hodnota `text` označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na stránkach https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo zadanie `null` bude mať za následok analýzu dátumu podľa najlepších možností.
-   `Culture`: Ak `Format` nemá hodnotu null, `Culture` ovláda niektoré špecifikátory formátu. Napríklad v `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...` , zatiaľ čo v `"ru-RU"` `"MMM"` je `"$", "ааа", "аар", ...` . Keď `Formát` `null`, `Culture` ovláda predvolený formát, ktorý sa má použiť. Keď má `Culture` hodnotu `null` alebo sa vynechá, použije sa `Culture.Current`.

Na podporu starších pracovných postupov môže byť textová hodnota `options`. Toto sa správa rovnako, ako keby `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertujte hodnotu `"2010-12-31T01:30:00-08:00"` na hodnotu `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Konvertujte pomocou vlastného formátu a nemeckej jazykovej verzie.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Konvertujte pomocou normy ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
