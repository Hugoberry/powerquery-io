---
title: WebAction.Request
---

# WebAction.Request


Cria uma ação que, quando executada, retorna os resultados de realizar uma solicitação HTTP como um valor binário.


## Syntax

```powerquery
WebAction.Request(
    method as text,
    url as text,
    optional options as record
) as action
```


## Remarks

Cria uma ação que, quando executada, retornará os resultados de executar uma solicitação `method` em `url` usando HTTP como um valor binário. Um parâmetro de registro opcional, `options`, pode ser fornecido para especificar as propriedades adicionais. O registro pode conter os seguintes campos:

-   `Query` : Adicione programaticamente parâmetros de consulta à URL sem precisar se preocupar com a saída.
-   `ApiKeyName` : Se o site de destino tiver uma noção de uma chave de API, este parâmetro poderá ser usado para especificar o nome (não o valor) do parâmetro de chave que precisa ser usado na URL. O valor da chave real é fornecido na credencial.
-   `Headers` : A especificação deste valor como um registro fornecerá cabeçalhos adicionais a uma solicitação HTTP.
-   `Timeout` : A especificação deste valor como uma duração alterará o tempo limite de uma solicitação HTTP. O valor padrão é 100 segundos.
-   `ExcludedFromCacheKey` : A especificação deste valor como uma lista excluirá essas chaves de cabeçalho HTTP de fazer parte do cálculo para o cache de dados.
-   `IsRetry` : A especificação deste valor lógico como true ignorará qualquer resposta existente no cache ao buscar dados.
-   `ManualStatusHandling` : A especificação deste valor como uma lista impedirá qualquer tratamento interno para solicitações HTTP cuja resposta tenha um desses códigos de status.
-   `RelativePath` : A especificação deste valor como texto o anexará à URL base antes de fazer a solicitação.
-   `Content` : A especificação deste valor fará com que o conteúdo se torne o corpo da solicitação HTTP.

Observe que esta função está desabilitada na maioria dos contextos. Considere usar Web.Contents ou Web.Headers.


## Examples

### Example #1
Executar uma solicitação GET no Bing.
```powerquery
WebAction.Request(WebMethod.Get, "https://bing.com")
```

Result: 
```powerquery
Action
```




## Category
Action
