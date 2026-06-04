---
title: DateTime.FromText
---

# DateTime.FromText


Vytvorí hodnotu datetimezone z miestneho a svetového formátu dátumu a času.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Vytvorí z textového vyjadrenia `text` hodnotu `datetime`. K zadaniu ďalších vlastností možno zadať voliteľný parameter `record` `options`. `Record` môže obsahovať nasledujúce polia:

-   `Format`: Hodnota `text` označujúca formát, ktorý sa má použiť. Ďalšie podrobnosti nájdete na stránkach https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechanie tohto poľa alebo zadanie `null` bude mať za následok analýzu dátumu podľa najlepších možností.
-   `Culture`: Ak `Format` nemá hodnotu null, `Culture` ovláda niektoré špecifikátory formátu. Napríklad v `"en-US"` `"MMM"` je `"Jan", "Feb", "Mar", ...` , zatiaľ čo v `"ru-RU"` `"MMM"` je `"$", "ааа", "аар", ...` . Keď `Formát` `null`, `Culture` ovláda predvolený formát, ktorý sa má použiť. Keď má `Culture` hodnotu `null` alebo sa vynechá, použije sa `Culture.Current`.

Na podporu starších pracovných postupov môže byť textová hodnota `options`. Toto sa správa rovnako, ako keby `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Konvertujte hodnotu `"2010-12-31T01:30:00"` na hodnotu dátumu a času.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Konvertujte hodnotu `"2010-12-31T01:30:00.121212"` na hodnotu dátumu a času.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Konvertujte hodnotu `"2010-12-31T01:30:00"` na hodnotu dátumu a času.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Konvertujte hodnotu `"20101231T013000"` na hodnotu dátumu a času.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
