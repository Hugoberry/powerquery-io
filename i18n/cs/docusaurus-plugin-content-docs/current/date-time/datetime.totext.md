---
title: DateTime.ToText
---

# DateTime.ToText


Vrátí textovou reprezentaci hodnoty datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vrátí textovou reprezentaci `dateTime`. Pro upřesnění dalších vlastností můžete zadat volitelný parametr `record`, `options`. `culture` se používá pouze pro starší pracovní postupy. `Record` může obsahovat následující pole:

-   `Format`: Hodnota typu `text` označující formát, který se má použít. Podrobnosti najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty `null` způsobí, že se datum naformátuje výchozí hodnotou definovanou jazykovou verzí `Culture`.
-   `Culture`: Pokud nemá `Format` hodnotu null, řídí některé specifikátory formátu jazyková verze `Culture`. Například pro `"en-US"` nabývá `"MMM"` hodnot `"Jan", "Feb", "Mar", ...`, zatímco pro `"ru-RU"` nabývá `"MMM"` hodnot `"янв", "фев", "мар", ...`. Když má `Format` hodnotu `null`, řídí výchozí formát, který se má použít, hodnota `Culture`. Když má `Culture` hodnotu `null` nebo není zadaná, použije se `Culture.Current`.

Pokud chcete podporovat starší pracovní postupy, můžou být `options` a `culture` také textové hodnoty. Má stejné chování, jako když `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Převede řetězec `#datetime(2010, 12, 31, 01, 30, 25)` na hodnotu `text`. *Výsledný výstup se může lišit v závislosti na aktuální jazykové verzi.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Převod pomocí vzoru ISO 8601.
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
