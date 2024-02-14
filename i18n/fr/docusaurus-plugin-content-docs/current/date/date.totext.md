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

Renvoie une représentation textuelle de <code>date</code>. Un paramètre facultatif <code>record</code>, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. <code>culture</code> n'est utilisé que pour les workflows hérités. Le <code>record</code> peut contenir les champs suivants : <ul>   <li><code>Format</code> : Une valeur <code>text</code> indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir <code>null</code> entraînera le formatage de la date en utilisant la valeur par défaut définie par <code>Culture</code>.</li>   <li><code>Culture</code> : Quand <code>Format</code> n'est pas nul, <code>Culture</code> contrôle certains spécificateurs de format. Par exemple, dans <code>"en-US"</code> <code>"MMM"</code> est <code>"Jan", "Feb", "Mar", ...</code>, tandis que dans <code>"ru-RU"</code> <code>"MMM"</code> est <code>"янв", "фев", "мар", ...</code>. Lorsque <code>Format</code> est <code>null</code>, <code>Culture</code> contrôle le format par défaut à utiliser. Lorsque <code>Culture</code> est <code>null</code> ou omis, <code>Culture.Current</code> est utilisé.</li></ul>Pour prendre en charge les flux de travail hérités, <code>options</code> et <code>culture</code> peut également être des valeurs de texte. Cela a le même comportement que si <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Convertit &lt;code&gt;#date(2010, 12, 31) &lt;/code&gt; en une valeur &lt;code&gt;texte&lt;/code&gt;. &lt;i&gt;la sortie des résultats peut varier en fonction de la culture actuelle.&lt;/i&gt;
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
