---
title: WebAction.Request
---

# WebAction.Request


## Description

Vytvoří akci, která při spuštění vrátí výsledky provedení požadavku HTTP jako binární hodnotu.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Details

Vytvoří akci, která po provedení vrátí výsledky provedení žádosti <code>method</code> na <code>url</code> pomocí HTTP jako binární hodnoty.   Pro určení dalších vlastností můžete zadat volitelný parametr záznamu, <code>options</code>. Záznam může obsahovat následující pole:    <ul><li><code>Query</code> : Přidejte parametry dotazu k URL programově bez nutnosti starat se o uvozovac&#237; znaky</li><li><code>ApiKeyName</code> : Pokud c&#237;lov&#253; web obsahuje z&#225;pis kl&#237;če rozhran&#237; API, jde tento parametr použ&#237;t k určen&#237; n&#225;zvu (nikoli hodnoty) parametru kl&#237;če, kter&#253; se mus&#237; použ&#237;t v adrese URL. Skutečn&#225; hodnota kl&#237;če je uveden&#225; v referenci.</li><li><code>Headers</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako z&#225;znamu dopln&#237;te do požadavku HTTP dalš&#237; z&#225;hlav&#237;.</li><li><code>Timeout</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako doby trv&#225;n&#237; se změn&#237; časov&#253; limit požadavku HTTP. V&#253;choz&#237; hodnota je 100 sekund.</li><li><code>ExcludedFromCacheKey</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako seznamu vylouč&#237;te tyto kl&#237;če z&#225;hlav&#237; protokolu HTTP jako souč&#225;st v&#253;počtu pro ukl&#225;d&#225;n&#237; dat do mezipaměti.</li><li><code>IsRetry</code> : Po zad&#225;n&#237; t&#233;to logick&#233; hodnoty jako true se budou při nač&#237;t&#225;n&#237; dat ignorovat všechny existuj&#237;c&#237; odpovědi v mezipaměti.</li><li><code>ManualStatusHandling</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako seznamu zabr&#225;n&#237;te všem integrovan&#253;m zpracov&#225;n&#237;m požadavků HTTP, jejichž odpověď obsahuje jeden z těchto stavov&#253;ch k&#243;dů.</li><li><code>RelativePath</code> : Po zad&#225;n&#237; t&#233;to hodnoty jako textu ji před vytvořen&#237;m ž&#225;dosti připoj&#237;te k b&#225;zi URL.</li><li><code>Content</code> : Po zad&#225;n&#237; t&#233;to hodnoty se jej&#237; obsah stane textem zpr&#225;vy požadavku HTTP.</li></ul>    <br />    Upozorňujeme, že tato funkce je ve většině kontextů zakázaná. Zvažte místo toho použití Web.Contents nebo Web.Headers.    


## Examples

### Example #1 
Proveďte v rámci služby požadavek GET.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
