---
title: Date.FromText
---

# Date.FromText


Crée une date à partir de formats de date locaux, universels et personnalisés.


## Syntax

```powerquery
Date.FromText(
    text as text,
    optional options as any
) as date
```


## Remarks

Crée une valeur de date à partir d’une représentation de texte.

-   `text` : valeur de texte à convertir en date.
-   `options` : paramètre `record` facultatif qui peut être fourni pour spécifier des propriétés supplémentaires. Le paramètre `record` peut contenir les champs suivants :
    
    -   `Format` : valeur `text` indiquant le format à utiliser. Pour découvrir plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 and https://go.microsoft.com/fwlink/?linkid=2180105. L’omission de ce champ ou la fourniture de résultats `nuls` entraîne l’analyse de la date en utilisant le meilleur effort possible.
    -   `Culture` : lorsque `Format` n’est pas nul, le paramètre `Culture` contrôle certains spécificateurs de format. Par exemple, dans ``"en-US"/code> `"MMM"` est `"Jan", "Feb", "Mar", ...` , alors que dans `"ru-RU"` `"MMM"` est `"янв", "фев", "мар", ...`. Lorsque `Format` est `nul`, `Culture` contrôle le format par défaut à utiliser. Lorsque `Culture` est `nul` ou omis, `Culture.Current` est utilisé.``
    

``Pour prendre en charge les workflows hérités, `options` peut également être une valeur de texte. Ceci a le même comportement que si `options = [Format = null, Culture = options]`.``


## Examples

### Example #1
Convertit `2010-12-31` en une valeur `date`.
```powerquery
Date.FromText("2010-12-31")
```

Result: 
```powerquery
#date(2010, 12, 31)
```


### Example #2
Convertir à l’aide d’un format personnalisé et de la culture allemande
```powerquery
Date.FromText("30 Dez 2010", [Format="dd MMM yyyy", Culture="de-DE"])
```

Result: 
```powerquery
#date(2010, 12, 30)
```


### Example #3
Recherche la date dans le calendrier grégorien qui correspond au début de 1400 dans le calendrier Hijri.
```powerquery
Date.FromText("1400", [Format="yyyy", Culture="ar-SA"])
```

Result: 
```powerquery
#date(1979, 11, 20)
```


### Example #4
Convertir les dates de texte italien avec des mois abrégés dans la colonne Date de publication en valeurs de date.
```powerquery
let
    Source = #table(type table [Account Code = text, Posted Date = text, Sales = number],
    {
        {"US-2004", "20 gen. 2023", 580},
        {"CA-8843", "18 lug. 2024", 280},
        {"PA-1274", "12 gen. 2023", 90},
        {"PA-4323", "14 apr. 2023", 187},
        {"US-1200", "14 dic. 2023", 350},
        {"PTY-507", "4 giu. 2024", 110}
    }),
    #"Converted Date" = Table.TransformColumns(
        Source,
        {"Posted Date", each Date.FromText(_, [Culture = "it-IT"]), type date}
    )
in
    #"Converted Date"
```

Result: 
```powerquery
#table(type table [Account Code = text, Posted Date = date, Sales = number],
{
    {"US-2004", #date(2023, 1, 20), 580},
    {"CA-8843", #date(2024, 7, 18), 280},
    {"PA-1274", #date(2023, 1, 12), 90},
    {"PA-4323", #date(2023, 4, 14), 187},
    {"US-1200", #date(2023, 12, 14), 350},
    {"PTY-507", #date(2024, 6, 4), 110}
})
```




## Category
Date
