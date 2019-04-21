text = [];
number = 0;

text[number++] = "&quot;Everything should be as simple as it is, but not simpler.&quot;<br/> - Albert Einstein"
text[number++] = "&quot;A good engineer does not know everything. He knows how to find it out.&quot;<br/> - Dr. J Celentano, Tunnel Engineer Guru"
text[number++] = "&quot;The concern for man and his destiny must always be the chief interest of all technical effort. Never forget it among your diagrams and equations.&quot;<br/> - Albert Einstein"
text[number++] = "&quot;The engineer performs many public functions from which he gets only philosophical satisfactions. Most people do not know it, but he is an economic and social force.&quot;<br/> - Herbert Hoover"
text[number++] = "&quot;I am and ever will be a white-socks, pocket-protector nerdy engineer. Born under the second law of thermodynamics, steeped in the steam tables, in love with free-body diagrams, transformed by Laplace and propelled by compressible flow.&quot;<br/> - Neil Armstrong"

increment = Math.floor(Math.random() * number);
document.getElementById('quote').innerHTML = text[increment];