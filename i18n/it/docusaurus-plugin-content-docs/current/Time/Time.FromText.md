---
title: Time.FromText
---

# Time.FromText


## Description

Crea un&#39;ora da formati di ora locali, universali e personalizzati.


## Syntax

```powerquery
Time.FromText(
    text as text,
    optional options as any
) as time
```


## Details

Crea un valore <code>time</code> da una rappresentazione testuale <code>text</code>. È possibile specificare un parametro facoltativo <code>record</code> <code>options</code> per specificare proprietà aggiuntive. Il <code>record</code> può contenere i campi seguenti:<ul>   <li><code>Formato</code>: valore <code>text</code> che indica il formato da usare. Per maggiori informazioni, vedere: https://go.microsoft.com/fwlink/?linkid=2180104 e https://go.microsoft.com/fwlink/?linkid=2180105. Se si omette questo campo o si specifica <code>Null</code> verrà eseguita l'analisi dell'ora nel miglior modo possibile.</li>   <li><code>Impostazioni cultura</code>: quando <code>Formato</code> non è Null, <code>Impostazioni cultura</code> controlla alcuni identificatori di formato. Ad esempio, in <code>"en-US"</code> <code>"tt"</code> è <code>"AM" o "PM</code>, mentre in <code>"ar-EG"</code> <code>"tt"</code> è <code>"ص", o "م"</code>. Quando <code>Formato</code> è <code>Null</code>, <code>Impostazioni cultura</code> controlla il formato predefinito da usare. Quando <code>Impostazioni cultura</code> è <code>Null</code> od omesso, viene usato <code>Culture.Current</code>.</li></ul>Per supportare i flussi di lavoro legacy, <code>options</code> può essere anche un valore di testo. Questo comportamento è identico a quello di <code>options</code><code>= [Format = null, Culture = <code>options</code>]</code>.


## Examples

### Example #1 
Converte &lt;code&gt;&#34;10:12:31am&#34;&lt;/code&gt; in un valore di ora.
```powerquery
Time.FromText("10:12:31am")
```

Result: 
```powerquery
#time(10, 12, 31)
```


### Example #2 
Converte &lt;code&gt;1012&lt;/code&gt; in un valore Time.
```powerquery
Time.FromText("1012")
```

Result: 
```powerquery
#time(10, 12, 00)
```


### Example #3 
Converte &lt;code&gt;10&lt;/code&gt; in un valore Time.
```powerquery
Time.FromText("10")
```

Result: 
```powerquery
#time(10, 00, 00)
```




## Category
Time
