---
title: DateTime.FromText
---

# DateTime.FromText


Crée un datetimezone à partir des formats datetime locaux et universels.


## Syntax

```powerquery
DateTime.FromText(
    text as text,
    optional options as any
) as datetime
```


## Remarks

Crée une `datetime` valeur de représentation de texte de `text`. Un paramètre facultatif `record`, `options`, peut être fourni pour spécifier des propriétés supplémentaires. Le `record` peut contenir les champs suivants :

-   `Format` : valeur `text` indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir `null` entraînera l’analyse de la date en faisant de son mieux.
-   `Culture` : Quand `Format` n'est pas nul, `Culture` contrôle certains spécificateurs de format. Par exemple, dans ``"en-US"/code> `"MMM"` est `"Jan", "Feb", "Mar", ...` , alors que dans `"ru-RU"` `"MMM"` est `"янв", "фев", "мар", ...`. Lorsque `Format` est `nul`, `Culture` contrôle le format par défaut à utiliser. Lorsque `Culture` est `null` ou omis, `Culture.Current` est utilisé.``

``Pour prendre en charge les workflows hérités, `options` peut également être une valeur de texte. Ceci a le même comportement que si `options = [Format = null, Culture = options]`.``


## Examples

### Example #1
Convertit `"2010-12-31T01:30:00"` en une valeur datetime.
```powerquery
DateTime.FromText("2010-12-31T01:30:25")
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 25)
```


### Example #2
Convertit `"2010-12-31T01:30:00.121212"` en une valeur datetime.
```powerquery
DateTime.FromText("30 Dez 2010 02:04:50.369730", [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
#datetime(2010, 12, 30, 2, 4, 50.36973)
```


### Example #3
Convertit `"2010-12-31T01:30:00"` en une valeur datetime.
```powerquery
DateTime.FromText("2000-02-08T03:45:12Z", [Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2000, 2, 8, 3, 45, 12)
```


### Example #4
Convertit `"20101231T013000"` en une valeur de type datetime.
```powerquery
DateTime.FromText("20101231T013000", [Format="yyyyMMdd'T'HHmmss", Culture="en-US"])
```

Result: 
```powerquery
#datetime(2010, 12, 31, 1, 30, 0)
```




## Category
DateTime
