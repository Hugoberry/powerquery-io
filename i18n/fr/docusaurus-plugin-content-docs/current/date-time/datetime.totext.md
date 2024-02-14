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

Renvoie une représentation textuelle de <code>dateTime</code>. Un paramètre facultatif <code>record</code>, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. <code>culture</code> n'est utilisé que pour les workflows hérités. Le <code>record</code> peut contenir les champs suivants : <ul>   <li><code>Format</code> : Une valeur <code>text</code> indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir <code>null</code> entraînera le formatage de la date en utilisant la valeur par défaut définie par <code>Culture</code>.</li>   <li><code>Culture</code> : Quand <code>Format</code> n'est pas nul, <code>Culture</code> contrôle certains spécificateurs de format. Par exemple, dans <code>"en-US"</code> <code>"MMM"</code> est <code>"Jan", "Feb", "Mar", ...</code>, tandis que dans <code>"ru-RU"</code> <code>"MMM"</code> est <code>"янв", "фев", "мар", ...</code>. Lorsque <code>Format</code> est <code>null</code>, <code>Culture</code> contrôle le format par défaut à utiliser. Lorsque <code>Culture</code> est <code>null</code> ou omis, <code>Culture.Current</code> est utilisé.</li></ul>Pour prendre en charge les flux de travail hérités, <code>options</code> et <code>culture</code> peut également être des valeurs de texte. Cela a le même comportement que si <code>options</code><code> = [Format = <code>options</code>, Culture = <code>culture</code>]</code>.


## Examples

### Example #1 
Convertit &lt;code&gt;#datetime(2010, 12, 31, 01, 30, 25) &lt;/code&gt; en une valeur &lt;code&gt;texte&lt;/code&gt;. &lt;i&gt;la sortie des résultats peut varier en fonction de la culture actuelle.&lt;/i&gt;
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
