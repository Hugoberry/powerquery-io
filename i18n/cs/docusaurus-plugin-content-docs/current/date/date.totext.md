---
title: Date.ToText
---

# Date.ToText


Vrátí textovou reprezentaci hodnoty data.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vrátí textovou reprezentaci `date`. Pro upřesnění dalších vlastností můžete zadat volitelný parametr `record`, `options`. `culture` se používá pouze pro starší pracovní postupy. `Record` může obsahovat následující pole:

-   `Format`: Hodnota typu `text` označující formát, který se má použít. Podrobnosti najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty `null` způsobí, že se datum naformátuje výchozí hodnotou definovanou jazykovou verzí `Culture`.
-   `Culture`: Pokud nemá `Format` hodnotu null, řídí některé specifikátory formátu jazyková verze `Culture`. Například pro `"en-US"` nabývá `"MMM"` hodnot `"Jan", "Feb", "Mar", ...`, zatímco pro `"ru-RU"` nabývá `"MMM"` hodnot `"янв", "фев", "мар", ...`. Když má `Format` hodnotu `null`, řídí výchozí formát, který se má použít, hodnota `Culture`. Když má `Culture` hodnotu `null` nebo není zadaná, použije se `Culture.Current`.

Pokud chcete podporovat starší pracovní postupy, můžou být `options` a `culture` také textové hodnoty. Má stejné chování, jako když `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Převede řetězec `#date(2010, 12, 31)` na hodnotu `text`. *Výsledný výstup se může lišit v závislosti na aktuální jazykové verzi.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Najde rok v kalendáři Hidžra odpovídající 1. lednu 2000 v gregoriánském kalendáři.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
