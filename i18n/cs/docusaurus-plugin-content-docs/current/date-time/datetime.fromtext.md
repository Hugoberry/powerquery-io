---
title: DateTime.FromText
---

# DateTime.FromText


Vytvoří hodnotu datetimezone z místního a univerzálního formátu datetime.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Vytvoří hodnotu `datetime` z textové reprezentace `text`. Pro upřesnění dalších vlastností můžete zadat volitelný parametr `record`, `options`. `Record` může obsahovat následující pole:

-   `Format`: Hodnota typu `text` označující formát, který se má použít. Další informace najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty `null` způsobí, že se datum parsuje podle nejvhodnějšího postupu.
-   `Culture`: Pokud nemá `Format` hodnotu null, řídí některé specifikátory formátu jazyková verze `Culture`. Například pro `"en-US"` nabývá `"MMM"` hodnot `"Jan", "Feb", "Mar", ...`, zatímco pro `"ru-RU"` nabývá `"MMM"` hodnot `"янв", "фев", "мар", ...`. Když má `Format` hodnotu `null`, řídí výchozí formát, který se má použít, hodnota `Culture`. Když má `Culture` hodnotu `null` nebo není zadaná, použije se `Culture.Current`.

Pokud chcete podporovat starší pracovní postupy, může být `options` také textová hodnota. Má stejné chování, jako když `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Převede řetězec `"2010-12-31T01:30:00"` na hodnotu datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Převede řetězec `"2010-12-31T01:30:00.121212"` na hodnotu datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Převede řetězec `"2010-12-31T01:30:00"` na hodnotu datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Převede řetězec `"20101231T013000"` na hodnotu datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
