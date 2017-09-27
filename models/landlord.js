module.exports = function(sequelize, DataTypes) {
    let Landlord = sequelize.define("Landlord", {

        salutation: {
            type: DataTypes.STRING,
            allowNull: false
        },

        first_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        middle_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false
        },   
        
        phone1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        phone1_type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        phone2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        phone2_type: {
            type: DataTypes.STRING,
            allowNull: false
        },    
        
        addr1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        addr2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        addr_city: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        addr_state: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        addr_zip: {
            type: DataTypes.STRING,
            allowNull: false
        },  
  
    });
  
      Landlord.associate = function(models) {
      // We're saying that a landlord should belong to a Property
      // A landlord can't be created without a Property due to the foreign key constraint
      Landlord.hasMany(models.Property, {
        foreignKey: {
          allowNull: false
        }
    });
      };

  
    return Landlord;
  };
