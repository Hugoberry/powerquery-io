---
title: Time.ToText
---

# Time.ToText


Vrátí textovou reprezentaci hodnoty času.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Vrátí textovou reprezentaci `time`. Pro upřesnění dalších vlastností můžete zadat volitelný parametr `record`, `options`. `culture` se používá pouze pro starší pracovní postupy. `Record` může obsahovat následující pole:

-   `Format`: Hodnota typu `text` označující formát, který se má použít. Podrobnosti najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty `null` způsobí, že se datum naformátuje výchozí hodnotou definovanou jazykovou verzí `Culture`.
-   `Culture`: Pokud nemá `Format` hodnotu null, řídí některé specifikátory formátu jazyková verze `Culture`. Například u `"en-US"` má `"tt"` hodnotu `"AM" nebo "PM"`, zatímco u `"ar-EG"` má `"tt"` hodnotu `"ص" nebo "م"`. Když má `Format` hodnotu `null`, řídí výchozí formát, který se má použít, hodnota `Culture`. Když má `Culture` hodnotu `null` nebo není zadaná, použije se `Culture.Current`.

Pokud chcete podporovat starší pracovní postupy, můžou být `options` a `culture` také textové hodnoty. Má stejné chování, jako když `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Převede řetězec `#time(01, 30, 25)` na hodnotu `text`. *Výsledný výstup se může lišit v závislosti na aktuální jazykové verzi.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Převod pomocí standardního formátu času.
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
