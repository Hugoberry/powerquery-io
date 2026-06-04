---
title: Time.FromText
---

# Time.FromText


Vytvoří časovou hodnotu z místního, univerzálního a vlastního časového formátu.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Vytvoří hodnotu `time` z textové reprezentace `text`. Pro upřesnění dalších vlastností můžete zadat volitelný parametr `record`, `options`. `Record` může obsahovat následující pole:

-   `Format`: Hodnota typu `text` označující formát, který se má použít. Podrobnosti najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty `null` způsobí, že se datum čas podle nejvhodnějšího postupu.
-   `Culture`: Pokud nemá `Format` hodnotu null, řídí některé specifikátory formátu jazyková verze `Culture`. Například u `"en-US"` má `"tt"` hodnotu `"AM" nebo "PM"`, zatímco u `"ar-EG"` má `"tt"` hodnotu `"ص" nebo "م"`. Když má `Format` hodnotu `null`, řídí výchozí formát, který se má použít, hodnota `Culture`. Když má `Culture` hodnotu `null` nebo není zadaná, použije se `Culture.Current`.

Pokud chcete podporovat starší pracovní postupy, může být `options` také textová hodnota. Má stejné chování, jako když `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Převede řetězec `"10:12:31am"` na hodnotu Time.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Převést řetězec `"1012"` na hodnotu Time
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Převést řetězec `"10"` na hodnotu Time
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
