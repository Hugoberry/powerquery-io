---
title: Time.ToText
---

# Time.ToText


Retourne une représentation textuelle de la valeur d’heure.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Renvoie une représentation textuelle de `time`. Un paramètre facultatif `record`, `options`, peut être fourni pour spécifier des propriétés supplémentaires. `culture` n’est utilisé que pour les flux de travail hérités. Le `record` peut contenir les champs suivants :

-   `Format` : valeur `text` indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir `null` entraînera le formatage de la date en utilisant la valeur par défaut définie par `Culture`.
-   `Culture` : Quand `Format` n'est pas nul, `Culture` contrôle certains spécificateurs de format. Par exemple, dans `"en-US"` `"tt"` est `"AM" ou "PM"`, alors que dans `"ar- EG"` `"tt"` est `"õ" ou "م"`. Lorsque `Format` est `nul`, `Culture` contrôle le format par défaut à utiliser. Lorsque `Culture` est `null` ou omis, `Culture.Current` est utilisé.

Pour prendre en charge les flux de travail hérités, `options` et `culture` peut également être des valeurs de texte. Cela a le même comportement que si `options = [Format = options, Culture = culture]`.


## Examples

### Example #1
Convertit `#time(01, 30, 25)` en une valeur `texte`. *la sortie des résultats peut varier en fonction de la culture actuelle.*
```powerquery
Time.ToText(#time(11, 56, 2))
```

Result: 
```powerquery
"11:56 AM"
```


### Example #2
Convertir à l’aide d’un format personnalisé et de la culture allemande
```powerquery
Time.ToText(#time(11, 56, 2), [Format="hh:mm", Culture="de-DE"])
```

Result: 
```powerquery
"11:56"
```


### Example #3
Convertir en utilisant le format d’heure standard
```powerquery
Time.ToText(#time(11, 56, 2), [Format="T", Culture="de-DE"])
```

Result: 
```powerquery
"11:56:02"
```




## Category
Time
