---
title: Time.FromText
---

# Time.FromText


Crée une heure à partir de formats d&#39;heure locaux, universels et personnalisés.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Remarks

Crée une valeur <code>time</code> à partir d'une représentation textuelle, <code>text</code>. Un paramètre facultatif <code>record</code>, <code>options</code>, peut être fourni pour spécifier des propriétés supplémentaires. Le <code>record</code> peut contenir les champs suivants : <ul>   <li><code>Format</code> : une valeur <code>text</code> indiquant le format à utiliser. Pour plus de détails, accédez à https://go.microsoft.com/fwlink/?linkid=2180104 et https://go.microsoft.com/fwlink/?linkid=2180105. Omettre ce champ ou fournir <code>null</code> entraînera l'analyse de l'heure en faisant de son mieux.</li>   <li><code>Culture</code> : lorsque <code>Format</code> est non nul, <code>Culture</code> contrôle certains spécificateurs de format. Par exemple, dans <code>"en-US"</code> <code>"tt"</code> est <code>"AM" ou "PM"</code>, alors que dans <code>"ar- EG"</code> <code>"tt"</code> est <code>"õ" ou "م"</code>. Lorsque <code>Format</code> est <code>null</code>, <code>Culture</code> contrôle le format par défaut à utiliser. Lorsque <code>Culture</code> est <code>null</code> ou omis, <code>Culture.Current</code> est utilisé.</li></ul>Pour prendre en charge les workflows hérités, <code>options</code> peut également être une valeur de texte. Cela a le même comportement que si <code>options</code><code> = [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Convertit &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; dans une valeur d&#39;heure.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Convertit &lt;code&gt;&#34;1012&#34;&lt;/code&gt; en valeur de type time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Convertit &lt;code&gt;&#34;10&#34;&lt;/code&gt; en valeur de type time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
