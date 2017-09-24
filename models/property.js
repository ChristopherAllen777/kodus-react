module.exports = function(sequelize, DataTypes) {
    let Property = sequelize.define("Property", {
  
/* Foreign Keys Needed
    landlord_id int(10),
    image_id int(10),  
*/
      prop_type: {
        type: DataTypes.STRING,
        allowNull: false
      },

      prop_active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
      },    

      situs_prefix: {
        type: DataTypes.STRING,
        allowNull: true
      },  

      situs_num: {
        type: DataTypes.STRING,
        allowNull: false
      },

      situs_street: {
        type: DataTypes.STRING,
        allowNull: false
      },

      situs_suffix: {
        type: DataTypes.STRING,
        allowNull: false
      },

      situs_city: {
        type: DataTypes.STRING,
        allowNull: false
      },

      situs_state: {
        type: DataTypes.STRING,
        allowNull: false
      },

      situs_zip: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
    });
  
    /* Need to Add Foreign Keys
    Rental.associate = function(models) {
      // Property Author with Tenant
      Rental.belongsTo(models.Landlord, {
        foreignKey: {
          allowNull: false
        }
      });
      Rental.hasMany(models.Tenant, {
          foreignKey: {
          allowNull: false
        }
      });
    };
  */
  
    return Property;
  };