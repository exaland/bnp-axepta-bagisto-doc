# Mappage de noms C 

**CName Mapping** permet aux locataires de connecter leur propre domaine au sous-domaine créé par le SaaS, ce qui contribue à l'image de marque professionnelle. 

Lorsqu'un locataire s'inscrit, un sous-domaine par défaut tel que **username.rootdomain.com** est créé. Avec CNAME, leur domaine réel peut être dirigé vers ce sous-domaine. Cela permet aux clients de trouver facilement le magasin et de conserver une image en ligne fiable et cohérente. 

Le mappage est configuré via le fournisseur DNS du locataire et le SaaS par le **Super Administrateur**, et il ne nécessite aucun plugin supplémentaire. 

--- 

## Flux pour mapper le domaine du locataire avec CNAME 

### Étape 1 : Connectez-vous à la console DNS 

Connectez-vous à votre fournisseur DNS (comme GoDaddy) et accédez aux paramètres du domaine que vous souhaitez mapper. 

<ImagePopup src="/images/multi-tenant-ecommerce/1-godaddy.png" alt="GoDaddy DNS Console" /> 

--- 

### Étape 2 : Ajouter un enregistrement DNS 

Une fois connecté, configurez un **enregistrement A** pour votre domaine qui dirige vers l'adresse IP du serveur SaaS. 

Par exemple, pour mapper le domaine **myshopdemo.com** avec le serveur SaaS **IP : 206.189.131.29**, ajoutez un **enregistrement A** dans vos paramètres DNS, comme indiqué dans l'image ci-dessous. 

<ImagePopup src="/images/multi-tenant-ecommerce/2-dns-record.png" alt="DNS Record Configuration" /> 

--- 

### Étape 3 : Configurer CNAME en SaaS 

Après avoir mappé le domaine avec l'adresse IP du serveur, connectez-vous en tant que **Super Admin** dans le SaaS. Vous verrez le sous-domaine du locataire déjà créé (par exemple, **site1.ExalandStore.com**). 

<ImagePopup src="/images/multi-tenant-ecommerce/3-super-tenants.png" alt="Super Admin Tenants List" /> 

Pour mapper le domaine réel du locataire (par exemple, **myshopdemo.com**), cliquez sur l'**icône de modification (crayon)**, saisissez le domaine dans le champ **CNAME**, puis cliquez sur **Enregistrer le locataire** pour enregistrer. 

<ImagePopup src="/images/multi-tenant-ecommerce/4-edit-tenant.png" alt="Edit Tenant CNAME" /> 

--- 

### Étape 4 : Testez le domaine 

Ouvrez le site Web du locataire dans un navigateur et voyez s'il se charge correctement. 

<ImagePopup src="/images/multi-tenant-ecommerce/5-tenant-store.png" alt="Tenant Store Frontend" /> 

Si le site Web se charge sur le domaine d'origine du locataire (comme **myshopdemo.com**), cela signifie que la connexion avec le sous-domaine SaaS a fonctionné avec succès.
