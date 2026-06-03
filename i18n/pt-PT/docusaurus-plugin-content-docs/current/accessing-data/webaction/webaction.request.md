---
title: WebAction.Request
---

# WebAction.Request


Cria uma ação que, quando executada, irá devolver os resultados da execução de um pedido HTTP como um valor binário.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Cria uma ação que, quando executada, devolverá, sob a forma de um valor binário, os resultados da execução de um pedido `method` a `url` por HTTP. Poderá ser fornecido um parâmetro de registo opcional, `options`, para especificar propriedades adicionais. O registo pode conter os campos seguintes:

-   `Query` : Adicione programaticamente parâmetros de consulta ao URL, sem ter de se preocupar com escapes.
-   `ApiKeyName` : Se o site de destino tiver uma noção de uma chave de API, este parâmetro pode ser utilizado para especificar o nome (não o valor) do parâmetro chave que é necessário utilizar no URL. O valor chave real é fornecido na credencial.
-   `Headers` : Especificar este valor como um registo vai fornecer cabeçalhos adicionais a um pedido HTTP.
-   `Timeout` : Especificar este valor como uma duração vai alterar o tempo limite para um pedido HTTP. O valor predefinido é de 100 segundos.
-   `ExcludedFromCacheKey` : Especificar este valor como uma lista vai excluir estas chaves de cabeçalho HTTP para que não façam parte do cálculo para colocar os dados em cache.
-   `IsRetry` : Especificar este valor lógico como verdadeiro vai ignorar qualquer resposta existente na cache ao obter os dados.
-   `ManualStatusHandling` : Especificar este valor como uma lista vai impedir qualquer processamento incorporado para pedidos HTTP cuja resposta tenha um destes códigos de estado.
-   `RelativePath` : Especificar este valor como texto acrescenta-o ao URL base antes de fazer o pedido.
-   `Content` : Especificar este valor vai fazer com que os conteúdos do mesmo se tornem o corpo do pedido HTTP.

Tenha em atenção que esta função está desativada na maioria dos contextos. Considere utilizar Web.Contents ou Web.Headers em alternativa.


## Examples

### Example #1
Executar um pedido GET no Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
