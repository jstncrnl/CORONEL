<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'wordpress' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', '' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '<zOk#WH7u<?ks~V}(kB~&.*y@Ijh0j]NF fZLDF)Dyoy4rE{bxs~r4RRY]Pc77$|' );
define( 'SECURE_AUTH_KEY',  '.$OCEqT(}@ H|Rxy4s}$F)Mx/JSsIYhs>>|wh[H=lC<?1&I+B%]fFCa@m.:<SvFl' );
define( 'LOGGED_IN_KEY',    '</+ug/8mvMa/Pi)~+nW2Qh_ZAY60!%Lb<v)MeqBUX(N?R&6d~kh:kO2X3U_9o@R5' );
define( 'NONCE_KEY',        'F<_ktqG7l6)[BS,ySV2^;d.!/&#D&`--g}4D[-juL)?<E$$$.,X[u4|}Y1./|XhH' );
define( 'AUTH_SALT',        'khT{uI0_t.*9;NXNR]`k@If:(Vo<7}px%Wh?R-e,7Py}{7>U>,7>4HO><^4}jSy<' );
define( 'SECURE_AUTH_SALT', 'rEpO|WGNj3^gUFd>O9TP4|H&H_Ys[Guw$sgjiy<L>4udh!o&`DKOWn_I4I9BNlWZ' );
define( 'LOGGED_IN_SALT',   '5ML=w/qE|+,_+S-F(Ga-kT5zThXml8t$DTT9HFOJ9(PHBIN|]c`gtH%g(*%u~0l<' );
define( 'NONCE_SALT',       't$,P=M!_{<Rl^0zhFS6k4N&@Lbfdi4>*914FBovw10Myn*>syf^=A7T*BB<<%JTB' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
