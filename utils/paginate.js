/*
 * Pagination
 * There are two methods: offset-based and cursor-based paginations.
 * This is offset-based pagination.
 */
exports.offset = async (
  model,
  page = 1,
  limit = 10,
  filters = {},
  fields = {},
  sort = {}
) => {
  const offset = (page - 1) * limit;

  // count = await model.estimatedDocumentCount(filters); // For Large Datasets

  // collections = await model
  //   .find(filters, fields, { skip: offset, limit: limit })
  //   .exec();
  let count;
  let collections;
  try {
    count = await model.countDocuments(filters).exec();
    collections = await model
      .find(filters, fields)
      .sort(sort)
      .skip(offset)
      .limit(limit);
  } catch (error) {
    error.status = 500;
    throw error;
  }

  return {
    total: count,
    data: collections,
    currentPage: page,
    previousPage: page == 1 ? null : page - 1,
    nextPage: page * limit >= count ? null : page + 1,
    lastPage: Math.ceil(count / limit),
    countPerPage: limit,
  };
};

exports.noCount = async (
  model,
  page = 1,
  limit = 10,
  filters = {},
  fields = {},
  sort = {}
) => {
  const offset = (page - 1) * limit;

  // collections = await model
  //   .find(filters, fields, { skip: offset, limit: limit })
  //   .exec();
  let collections;
  try {
    collections = await model
      .find(filters, fields)
      .sort(sort)
      .skip(offset)
      .limit(limit + 1);
  } catch (error) {
    error.status = 500;
    throw error;
  }

  let hasNextPage = false;
  if (collections.length > limit) {
    // if got an extra result
    hasNextPage = true; // has a next page of results
    collections.pop(); // remove extra result
  }

  return {
    data: collections,
    currentPage: page,
    previousPage: page == 1 ? null : page - 1,
    nextPage: hasNextPage ? page + 1 : null,
    countPerPage: limit,
  };
};
/*
 * Pagination
 * There are two methods: offset-based and cursor-based paginations.
 * This is cursor-based pagination.
 */
exports.cursor = async (model, cursor, limit = 10, fields = {}, sort = {}) => {
  const query = cursor
    ? { createdAt: { $lt: new Date(cursor) } } // Fetch admins created before the cursor
    : {};

  let collections;
  try {
    collections = await model
      .find(query, fields)
      .sort(sort) // Sort by createdAt in descending order
      .limit(limit + 1); // Fetch one extra document to check if there's a next page
  } catch (error) {
    error.status = 500;
    throw error;
  }

  const hasNextPage = collections.length > limit;
  if (hasNextPage) {
    collections.pop(); // Remove the extra document if it exists
  }

  return {
    collections,
    nextCursor: hasNextPage
      ? collections[collections.length - 1].createdAt.toISOString()
      : null,
  };
};
