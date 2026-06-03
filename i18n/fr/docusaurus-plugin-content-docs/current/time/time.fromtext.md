---
title: Time.FromText
---

# Time.FromText


Crée une heure à partir de formats d'heure locaux, universels et personnalisés.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Crée une valeur `time` à partir d'une représentation textuelle, `text`. Un paramètre facultatif `record`, `options`, peut être fourni pour spécifier des propriétés supplémentaires. Le `record` peut contenir les champs suivants :

-   `Format` : valeur `text` indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir `null` entraînera l'analyse de l'heure en faisant de son mieux.
-   `Culture` : Quand `Format` n'est pas nul, `Culture` contrôle certains spécificateurs de format. Par exemple, dans `"en-US"` `"tt"` est `"AM" ou "PM"`, alors que dans `"ar- EG"` `"tt"` est `"õ" ou "م"`. Lorsque `Format` est `nul`, `Culture` contrôle le format par défaut à utiliser. Lorsque `Culture` est `null` ou omis, `Culture.Current` est utilisé.

Pour prendre en charge les workflows hérités, `options` peut également être une valeur de texte. Ceci a le même comportement que si `options = [Format = null, Culture = options]`.


## Examples

### Example #1
Convertit `"10:12:31am"` dans une valeur d'heure.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2
Convertit `"1012"` en valeur de type time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3
Convertit `"10"` en valeur de type time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
