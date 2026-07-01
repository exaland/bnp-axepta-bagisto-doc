# Extension Axepta BNP Paribas

L'extension **Axepta BNP Paribas** permet d'intégrer la solution de paiement sécurisée Axepta à votre boutique Bagisto. Les clients sont redirigés vers la page de paiement sécurisée de BNP Paribas, garantissant un paiement conforme aux standards de sécurité PCI DSS et 3-D Secure.

## Installation

Après avoir copié le package dans votre projet Bagisto, exécutez la commande suivante :

```bash
php artisan axepta:install
```

L'installateur :

* Publie les ressources du module.
* Nettoie les caches de Bagisto.
* Vérifie la configuration de l'administration.
* Rend le moyen de paiement disponible dans Bagisto.

Une fois l'installation terminée, videz les caches si nécessaire :

```bash
php artisan optimize:clear
```

---


# Fonctionnement

Lorsqu'un client sélectionne **Axepta BNP Paribas** au moment du paiement :

1. Une commande Bagisto est créée.
2. Les informations de paiement sont chiffrées à l'aide de l'algorithme Blowfish.
3. Une signature HMAC est générée.
4. Le client est redirigé vers la page de paiement sécurisée Axepta.
5. Après validation du paiement, Axepta redirige automatiquement le client vers votre boutique.
6. La notification serveur (URL Notify) met à jour automatiquement le statut de la commande.

---

# URLs de retour

Le module utilise automatiquement les URLs suivantes :

| Fonction             | URL               |
| -------------------- | ----------------- |
| Paiement accepté     | `/axepta/success` |
| Paiement refusé      | `/axepta/failure` |
| Paiement annulé      | `/axepta/cancel`  |
| Notification serveur | `/axepta/notify`  |

Ces URLs sont générées automatiquement par Bagisto.

---

# Compatibilité

Le module est compatible avec :

* Bagisto 2.x
* PHP 8.2+
* PHP 8.3+
* Laravel 11
* Laravel 12

---

# Sécurité

Le module implémente :

* Chiffrement Blowfish CBC
* Signature HMAC SHA-256
* Validation de la réponse Axepta
* Gestion automatique des notifications serveur
* Compatibilité 3-D Secure

Aucune donnée bancaire n'est stockée dans Bagisto. Toutes les informations de paiement sont traitées directement par la plateforme sécurisée Axepta BNP Paribas.

---

# Désinstallation

Pour supprimer les ressources publiques du module :

```bash
php artisan axepta:uninstall
```

Ensuite, videz les caches :

```bash
php artisan optimize:clear
```
