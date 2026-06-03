---
title: Date.ToText
---

# Date.ToText


Retourne une représentation textuelle de la valeur de date.


## Syntax

```powerquery
Date.ToText(
    date as date,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Renvoie une représentation textuelle de `date`. Un paramètre facultatif `record`, `options`, peut être fourni pour spécifier des propriétés supplémentaires. `culture` n’est utilisé que pour les flux de travail hérités. Le `record` peut contenir les champs suivants :

-   `Format` : valeur `text` indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir `null` entraînera le formatage de la date en utilisant la valeur par défaut définie par `Culture`.
-   `Culture` : Quand `Format` n'est pas nul, `Culture` contrôle certains spécificateurs de format. Par exemple, dans ``« en-US »/code> `« MMM »` est `« Jan », « Feb », « Mar », ...` , alors que dans `« ru-RU"` `« MMM »` est `« янв », « фев », « мар », ...`. Lorsque `Format` est `nul`, `Culture` contrôle le format par défaut à utiliser. Lorsque `Culture` est `null` ou omis, `Culture.Current` est utilisé.``

``Pour prendre en charge les flux de travail hérités, `options` et `culture` peut également être des valeurs de texte. Cela a le même comportement que si `options = [Format = options, Culture = culture]`.``


## Examples

### Example #1
Convertit `#date(2010, 12, 31)` en une valeur `texte`. *la sortie des résultats peut varier en fonction de la culture actuelle.*
```powerquery
Date.ToText(#date(2010, 12, 31))
```

Result: 
```powerquery
"12/31/2010"
```


### Example #2
Convertir à l’aide d’un format personnalisé et de la culture allemande
```powerquery
Date.ToText(#date(2010, 12, 31), [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
"31 Dez 2010"
```


### Example #3
Recherche la date dans le calendrier grégorien qui correspond au début de 2000 dans le calendrier Hijri.
```powerquery
Date.ToText(#date(2000, 1, 1), [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
"1420"
```




## Category
Date
