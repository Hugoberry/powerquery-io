---
title: DateTimeZone.FromText
---

# DateTimeZone.FromText


Crée un datetimezone à partir des formats datetimezone locaux, universels et personnalisés.


## Syntax

```powerquery
DateTimeZone.FromText(
    text as text,
    optional options as any
) as datetimezone
```


## Remarks

Crée une `datetimezone` valeur de représentation textuelle, `text`. Un paramètre facultatif `record`, `options`, peut être fourni pour spécifier des propriétés supplémentaires. Le `record` peut contenir les champs suivants :

-   `Format` : valeur `text` indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir `null` entraînera l’analyse de la date en faisant de son mieux.
-   `Culture` : Quand `Format` n'est pas nul, `Culture` contrôle certains spécificateurs de format. Par exemple, dans ``« en-US »/code> `« MMM »` est `« Jan », « Feb », « Mar », ...` , alors que dans `« ru-RU"` `« MMM »` est `« янв », « фев », « мар », ...`. Lorsque `Format` est `nul`, `Culture` contrôle le format par défaut à utiliser. Lorsque `Culture` est `null` ou omis, `Culture.Current` est utilisé.``

``Pour prendre en charge les workflows hérités, `options` peut également être une valeur de texte. Ceci a le même comportement que si `options = [Format = null, Culture = options]`.``


## Examples

### Example #1
Convertit `"2010-12-31T01:30:00-08:00"` dans une valeur `datetimezone`.
```powerquery
DateTimeZone.FromText("2010-12-31T01:30:00-08:00")
```

Result: 
```powerquery
#datetimezone(2010, 12, 31, 1, 30, 0, -8, 0)
```


### Example #2
Convertir à l’aide d’un format personnalisé et de la culture allemande
```powerquery
DateTimeZone.FromText("30 Dez 2010 02:04:50.369730 +02:00", [Format="dd MMM yyyy HH:mm:ss.ffffff zzz", Culture="de-DE"])
```

Result: 
```powerquery
#datetimezone(2010, 12, 30, 2, 4, 50.36973, 2, 0)
```


### Example #3
Convertir à l’aide d’ISO 8601
```powerquery
DateTimeZone.FromText("2009-06-15T13:45:30.0000000-07:00", [Format="O", Culture="en-US"])
```

Result: 
```powerquery
#datetimezone(2009, 6, 15, 13, 45, 30, -7, 0)
```




## Category
DateTimeZone
