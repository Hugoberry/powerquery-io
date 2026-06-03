---
title: DateTime.ToText
---

# DateTime.ToText


Retourne une représentation de texte de la valeur datetime.


## Syntax

```powerquery
DateTime.ToText(
    dateTime as datetime,
    optional options as any,
    optional culture as text
) as text
```


## Remarks

Renvoie une représentation textuelle de `dateTime`. Un paramètre facultatif `record`, `options`, peut être fourni pour spécifier des propriétés supplémentaires. `culture` n’est utilisé que pour les flux de travail hérités. Le `record` peut contenir les champs suivants :

-   `Format` : valeur `text` indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir `null` entraînera le formatage de la date en utilisant la valeur par défaut définie par `Culture`.
-   `Culture` : Quand `Format` n'est pas nul, `Culture` contrôle certains spécificateurs de format. Par exemple, dans ``"en-US"/code> `"MMM"` est `"Jan", "Feb", "Mar", ...` , alors que dans `"ru-RU"` `"MMM"` est `"янв", "фев", "мар", ...`. Lorsque `Format` est `nul`, `Culture` contrôle le format par défaut à utiliser. Lorsque `Culture` est `null` ou omis, `Culture.Current` est utilisé.``

``Pour prendre en charge les flux de travail hérités, `options` et `culture` peut également être des valeurs de texte. Cela a le même comportement que si `options = [Format = options, Culture = culture]`.``


## Examples

### Example #1
Convertit `#datetime(2010, 12, 31, 01, 30, 25)` en une valeur `texte`. *la sortie des résultats peut varier en fonction de la culture actuelle.*
```powerquery
DateTime.ToText(#datetime(2010, 12, 31, 01, 30, 25))
```

Result: 
```powerquery
"12/31/2010 1:30:25 AM"
```


### Example #2
Convertir à l’aide d’un format personnalisé et de la culture allemande
```powerquery
DateTime.ToText(#datetime(2010, 12, 30, 2, 4, 50.36973), [Format="dd MMM yyyy HH:mm:ss.ffffff", Culture="de-DE"])
```

Result: 
```powerquery
"30 Dez 2010 02:04:50.369730"
```


### Example #3
Convertir à l’aide du modèle ISO 8601
```powerquery
DateTime.ToText(#datetime(2000, 2, 8, 3, 45, 12),[Format="yyyy-MM-dd'T'HH:mm:ss'Z'", Culture="en-US"])
```

Result: 
```powerquery
"2000-02-08T03:45:12Z"
```




## Category
DateTime
