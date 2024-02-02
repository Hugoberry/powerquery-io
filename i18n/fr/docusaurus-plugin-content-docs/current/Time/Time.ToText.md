---
title: Time.ToText
---

# Time.ToText


## Description

Retourne une représentation textuelle de la valeur d’heure.


## Syntax

```powerquery
Time.ToText(
    time as time,
    optional options as any,
    optional culture as text
) as text
```


## Details

Renvoie une représentation textuelle de <code>time</code>. Un paramètre facultatif <code>record</code>, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. <code>culture</code> n'est utilisé que pour les workflows hérités. Le <code>record</code> peut contenir les champs suivants : <ul>   <li><code>Format</code> : une valeur <code>text</code> indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir <code>null</code> entraînera le formatage de la date en utilisant la valeur par défaut définie par <code>Culture</code>.</li>   <li><code>Culture</code> : Quand <code>Format</code> n'est pas nul, <code>Culture</code> contrôle certains spécificateurs de format. Par exemple, dans <code>"en-US"</code> <code>"tt"</code> est <code>"AM" ou "PM"</code>, alors que dans <code>"ar- EG"</code> <code>"tt"</code> est <code>"õ" ou "م"</code>. Lorsque <code>Format</code> est <code>null</code>, <code>Culture</code> contrôle le format par défaut à utiliser. Lorsque <code>Culture</code> est <code>null</code> ou omis, <code>Culture.Current</code> est utilisé.</li></ul>Pour prendre en charge les flux de travail hérités, <code>options</code> et <code>culture</code> peut également être des valeurs de texte. Cela a le même comportement que si <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Convertit &lt;code&gt;#time(01, 30, 25) &lt;/code&gt; en une valeur &lt;code&gt;texte&lt;/code&gt;. &lt;i&gt;la sortie des résultats peut varier en fonction de la culture actuelle.&lt;/i&gt;
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
