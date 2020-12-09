---
to: <%=cwd %>/<%= h.changeCase.pascal(name) %>/index.ts
---
import { <%= h.changeCase.pascal(name) %> } from './<%= h.changeCase.pascal(name) %>.component';

export default <%= h.changeCase.pascal(name) %>;