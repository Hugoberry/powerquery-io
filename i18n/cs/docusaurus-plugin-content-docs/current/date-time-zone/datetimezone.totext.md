---
title: DateTimeZone.ToText
---

# DateTimeZone.ToText


Vrátí textovou reprezentaci hodnoty datetimezone.


## Syntax

```powerquery
DateTimeZone.ToText(
    dateTimeZone as datetimezone,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vrátí textovou reprezentaci `dateTimeZone`. Pro upřesnění dalších vlastností můžete zadat volitelný parametr `record`, `options`. `culture` se používá pouze pro starší pracovní postupy. `Record` může obsahovat následující pole:

-   `Format`: Hodnota typu `text` označující formát, který se má použít. Podrobnosti najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty `null` způsobí, že se datum naformátuje výchozí hodnotou definovanou jazykovou verzí `Culture`.
-   `Culture`: Pokud nemá `Format` hodnotu null, řídí některé specifikátory formátu jazyková verze `Culture`. Například pro `"en-US"` nabývá `"MMM"` hodnot `"Jan", "Feb", "Mar", ...`, zatímco pro `"ru-RU"` nabývá `"MMM"` hodnot `"янв", "фев", "мар", ...`. Když má `Format` hodnotu `null`, řídí výchozí formát, který se má použít, hodnota `Culture`. Když má `Culture` hodnotu `null` nebo není zadaná, použije se `Culture.Current`.

Pokud chcete podporovat starší pracovní postupy, můžou být `options` a `culture` také textové hodnoty. Má stejné chování, jako když `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Převede řetězec `#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0)` na hodnotu `text`. *Výsledný výstup se může lišit v závislosti na aktuální jazykové verzi.*
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 31, 01, 30, 25, 2, 0))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM +02:00"
```


### Example #2
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
DateTimeZone.ToText(#datetimezone(2010, 12, 30, 2, 4, 50.36973, -8,0), [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730 -08:00"
```


### Example #3
Převod pomocí vzoru ISO 8601.
```powerquery
DateTimeZone.ToText(#datetimezone(2000, 2, 8, 3, 45, 12, 2, 0),[Format="O", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12.0000000+02:00"
```




## Category
DateTimeZone
