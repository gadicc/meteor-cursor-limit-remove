# meteor-cursor-limit-remove

On a query using sort+limit, since minimongo inserts aren't batched, each
insert will result in a new template being created+destroyed even if it
will never be rendered.

A different issue though is that the bigger the list the longer it can
take to complete the create/destroy lifecycle.

## Sample output

```
lifetime of b00400 was 10ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:31 lifetime of b00368 was 56ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:31 lifetime of b00278 was 66ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:31 lifetime of b00221 was 73ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:31 lifetime of b00196 was 84ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:31 lifetime of b00172 was 102ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:31 lifetime of b00134 was 130ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:31 lifetime of b00130 was 160ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:31 lifetime of b00123 was 306ms
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:37 render apple
meteor-cursor-limit-remove.js?57ad41f89cafdc30ce57a8bc6c350864aea88589:38 total time: 26408ms
```