/*global define*/
define(['../Core/DeveloperError'
        ], function(
                DeveloperError) {
    "use strict";

    function throwInstantiationError() {
        throw new DeveloperError('This type should not be instantiated directly.');
    }

    /**
     * Defines the interface for data sources, which turn arbitrary data into a
     * {@link DynamicObjectCollection} for generic consumption. This object is an interface
     * for documentation purposes and is not intended to be instantiated directly.
     * @alias DataSource
     * @constructor
     */
    var DataSource = throwInstantiationError;

    /**
     * Gets an event that will be raised when non-time-Varying data changes
     * or if the return value of getIsTimeVarying changes.
     * @memberof DataSource
     * @function
     *
     * @returns {Event} The event.
     */
    DataSource.prototype.getChangedEvent = throwInstantiationError;

    /**
     * Gets an event that will be raised if an error is encountered during processing.
     * @memberof DataSource
     * @function
     *
     * @returns {Event} The event.
     */
    DataSource.prototype.getErrorEvent = throwInstantiationError;

    /**
     * Gets the top level clock associated with this data source, or undefined if no clock exists.
     * @memberof DataSource
     * @function
     *
     * @returns {DynamicClock} The clock associated with this data source, or undefined if none exists.
     */
    DataSource.prototype.getClock = throwInstantiationError;

    /**
     * Gets the DynamicObjectCollection generated by this data source.
     * @memberof DataSource
     * @function
     *
     * @returns {DynamicObjectCollection} The collection of objects generated by this data source.
     */
    DataSource.prototype.getDynamicObjectCollection = throwInstantiationError;

    /**
     * Gets a value indicating if the data varies with simulation time.  If the return value of
     * this function changes, the changed event will be raised.
     * @memberof DataSource
     * @function
     *
     * @returns {Boolean} True if the data is varies with simulation time, false otherwise.
     */
    DataSource.prototype.getIsTimeVarying = throwInstantiationError;

    return DataSource;
});