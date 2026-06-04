---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Vytvoří hodnotu datetimezone z místních, univerzálních a vlastních formátů datetimezone.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Vytvoří hodnotu `datetimezone` z textové reprezentace, `text`. Pro upřesnění dalších vlastností můžete zadat volitelný parametr `record`, `options`. `Record` může obsahovat následující pole:

-   `Format`: Hodnota typu `text` označující formát, který se má použít. Další informace najdete na https://go.microsoft.com/fwlink/?linkid=2180104 a https://go.microsoft.com/fwlink/?linkid=2180105. Vynechání tohoto pole nebo zadání hodnoty `null` způsobí, že se datum parsuje podle nejvhodnějšího postupu.
-   `Culture`: Pokud nemá `Format` hodnotu null, řídí některé specifikátory formátu jazyková verze `Culture`. Například pro `"en-US"` nabývá `"MMM"` hodnot `"Jan", "Feb", "Mar", ...`, zatímco pro `"ru-RU"` nabývá `"MMM"` hodnot `"янв", "фев", "мар", ...`. Když má `Format` hodnotu `null`, řídí výchozí formát, který se má použít, hodnota `Culture`. Když má `Culture` hodnotu `null` nebo není zadaná, použije se `Culture.Current`.

Pokud chcete podporovat starší pracovní postupy, může být `options` také textová hodnota. Má stejné chování, jako když `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Převede řetězec `"2010-12-31T01:30:00-08:00"` na hodnotu `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Umožňuje převod pomocí vlastního formátu a německé jazykové verze.
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Převod pomocí ISO 8601.
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
