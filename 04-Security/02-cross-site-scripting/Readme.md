XSS :- Someone who is external, can inject some js in your system and It will steal any cookies, data, credentials, soe critical information which you don't want to reveal etc.


# In this hacker will inject some malicious script in your website.

- In some attack, the victim's cookies are stolen or private credentials are revealed.

------------------------

Multiple Vulnerability and Mitigation :- 

1. User Session Hijacking :- 

2. Unathorized Activities :- 

3. Capturing Keystroke :- 

4. Stealing critical info :- 

5. Phising Attack :- 

MITIGATION :- 
 - List all possible way to take user input and sanatize it.
 - not used innerHTML and replace it with textContent.
 - Escaping mechanism.
 - used library like react.
 - Senetize data :- use library like DOM purify.
 - to preventing 3rd party endpoint use, CSP Headers

----------------------------------------------------------------------

CSP header :- (Content Security Policy)
  1. Allowed Sources
  2. Script Nonces