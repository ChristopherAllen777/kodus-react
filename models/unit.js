module.exports = function(sequelize, DataTypes) {
    let Unit = sequelize.define("Unit", {
  
/* 
Foreign Key - 1 Property can have Many Units

*/
        unit_type: {
            type: DataTypes.STRING,
            allowNull: false
        },       

        unit_active: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        rent_amt: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        utilities: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        pets: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        sqft: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        bed: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        bath: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        bath_private: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

        living_room: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        dining_room: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        kitchen: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        garage: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        carport: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        list_flag: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },

    });
  

    Unit.associate = function(models) {
      // Property Author with Tenant
      Unit.belongsTo(models.Property, {
        foreignKey: {
          allowNull: false
        }
      });
    };

    return Unit;
  };